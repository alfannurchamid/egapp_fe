<script>
// @ts-nocheck

  import { page } from "$app/stores";
  import { GetCookie } from "$lib/stores/cokies";
  import { onMount } from "svelte";
  import TambahTugas from "$lib/compo/tambah_tugas.svelte";

  import RencanaKerjaRow from "$lib/compo/rencana_kerja_row.svelte";
  import { Falidate } from "$lib/dependedncies/falidate_session_login";
  import TugasRow from "$lib/compo/tugas_row.svelte";
  import { open_pop_tg, currentOpenTambahTugas, currentPelaksanaRow } from "$lib/stores/openPopTugas"

  import Plus from "$lib/svg/plus.svelte";
  import { user } from "$lib/stores/userLogin";



  /**
   * @type {any[]}
   */
  let rencanaKerjas = []
  let tugases = []
  let accessKey =""
  

  const get_tugases = async ()=>{
        console.log("Cekkkk")
        accessKey = GetCookie('accesskey')
        const response = await fetch('https://be.ekagroup.co/api/api/v1/tugas/get_tugases',
            {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer "+accessKey ,
                },
                body : JSON.stringify({
                  id_karyawan :  $user.id_karyawan,
                  bebas : 0
                }),
                credentials: "include",
              }
          )
            if(response.ok){
              let tugas = await response.json()
              tugases = tugas.data
            }
            console.log("tugases")
            console.log(tugases)
    }  

  const get_renkers = async ()=>{
    accessKey = GetCookie('accesskey')
    const response = await fetch('https://be.ekagroup.co/api/api/v1/rencana_kerja/get_rencana_kerjas',
    {
          method: "POST",
					headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + accessKey,
						},
            body : JSON.stringify({
              id_divisi:parseInt($page.params.id_divisi),
              bebas : 0
            }),
						credentials: "include",
					}
  )
        if(response.ok){
          let renker = await response.json()
           rencanaKerjas = renker.data

        }
 }
    onMount(async()=>{
		await Falidate();

    console.log("masuk ke 1");
      
    await get_renkers()
    await get_tugases()
})
</script>

<button on:click={()=>{ currentOpenTambahTugas(true)}} class=" fixed w-10 z-40 h-10 bg-red-400 rounded-full bottom-2 right-2"><Plus ukuran='w-10 h-10' warna='stroke-white'></Plus></button>
<div class=" flex flex-col w-full mt-20 ">




    <!-- pop up tambah Rencana kerja -->
{#if $open_pop_tg}
    <TambahTugas renker={false} karyawans ={false} ></TambahTugas>
{/if}

{#each tugases as tg}
  <TugasRow tugas = {tg} karyawans={false}></TugasRow>
{/each}

</div>
