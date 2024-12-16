<script>
// @ts-nocheck

  import { page } from "$app/stores";


  import CatatanTg from "$lib/compo/catatan_tg.svelte";
    import ReportTugas from "$lib/compo/report_tugas.svelte";
  import { GetCookie } from "$lib/stores/cokies";
    import { currentOpenCatatan, currentOpenReport } from "$lib/stores/openPopTugas";
    import { open_catatan, open_report } from "$lib/stores/openPopTugas";
  import { onMount } from "svelte";
  import { Falidate } from "$lib/dependedncies/falidate_session_login";


  let catatans = []
    
    let KPI = 'file konten plan'
    let accessKey = ''
    
    const get_catatan = async ()=>{
        accessKey = GetCookie('accesskey')
        const response = await fetch('be.ekagroup.co/api/api/v1/catatan_tugas/get_catatan_tugases',
        {
            method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer "+accessKey ,
                },
                body : JSON.stringify({
                  id_tugas :  parseInt($page.params.id_tugas)
                }),
                credentials: "include",
        }
        )
        if(response.ok){
            let catatan_ = await response.json()
            catatans = catatan_.data.data
        }
    } 

    onMount(async()=>{
      await Falidate()
      await get_catatan()
       })


</script>
<div class=" mt-20 rencanakerja_card p-1 px-5 my-2 w-full bg-white  flex flex-col rounded-lg ">
    <h6  class=" text-sm mb-3">Tugas</h6>
    <div class=" flex w-full justify-between flex-col">
        <h3>Pelaksanaan SOP produksi konten</h3>
      
    </div>
    <div class=" flex w-full justify-between text-xs mt-2 text-gray-600">
        <h3>deadline : 12/09/2024</h3>
        <div class=" "> Persentase capaian pekerjaan 60% </div>
    </div>
    
    <div class="flex w-full justify-around text-xxs mt-3 bg-slate-50">
        <h3 class=" text-xxs">jenis : rutin</h3>
        <!-- selesai , menunggu , dikerjakan , di blokir -->
        <div class="flex">
            status : 
            <div class=" p-2 h-3 rounded ml-2 bg-green-400 text-xxs text-center flex items-center justify-center text-white">  selesai  </div>
        </div>
        <div class="flex">
            prioritas :
            <div class=" ml-2 p-2 h-3 rounded bg-yellow-400 text-xxs text-center flex items-center justify-center ">  P0  </div>
        </div>
    </div>
    <p class=" text-sm  mt-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum rem aperiam labore iure ipsa debitis, veniam natus temporibus vero quasi nihil deserunt laboriosam aspernatur, recusandae officiis, dolore dolorum dicta harum. </p>
</div>

<div class=" flex w-full bg-gray-50 p-2  text-xs justify-around ">
    <button on:click={()=>{ currentOpenCatatan(true)}} class=" w-20 bg-yellow-400 p-1 text-center rounded-lg text-white font-semibold uppercase "> catatan </button>
    <button on:click={()=>{ currentOpenReport(true)}} class=" w-20 bg-blue-400 p-1 text-center rounded-lg text-white font-semibold uppercase "> report </button>
</div>


{#if $open_report}
<ReportTugas KPI={KPI}></ReportTugas>
{/if}

{#if $open_catatan}
<CatatanTg catatans = {catatans}></CatatanTg>
{/if}
