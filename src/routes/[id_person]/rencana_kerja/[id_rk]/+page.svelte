
<script type="text/javascript">
// @ts-nocheck

    import Person from "$lib/svg/person.svelte";
    // @ts-ignore
   
    import Plus from "$lib/svg/plus.svelte";
    // @ts-ignore
    // @ts-ignore
    import { circInOut, quintOut } from "svelte/easing";
   
    import TambahTugas from "$lib/compo/tambah_tugas.svelte";

  // @ts-ignore
  import { open_pop_tg, currentOpenTambahTugas, currentPelaksanaRow } from "$lib/stores/openPopTugas"
  import {open_catatan , currentOpenCatatan,open_report , currentOpenReport} from "$lib/stores/openPopRenKer"
  // @ts-ignore
  import Edit from "$lib/svg/edit.svelte";
  import TugasRow from "$lib/compo/tugas_row.svelte";
  import { onMount } from "svelte";
  import CatatanRk from "$lib/compo/catatan_rk.svelte";
import ReportRenKer from "$lib/compo/report_ren_ker.svelte";


    // data  dari server
    // @ts-ignore
    // @ts-ignore
    const my_id = '400a'
    const catatans = [{'id':'1c','catatan':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum rem aperiam labore iure ipsa debitis, veniam natus temporibus vero quasi nihil deserunt laboriosam aspernatur,'},{'id':'1c','catatan':'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum rem aperiam labore iure ipsa debitis, veniam natus temporibus vero quasi nihil deserunt laboriosam aspernatur,'}]

    onMount(()=>{
       // @ts-ignore
       currentPelaksanaRow([{'nama':'alpen','id':'A004','atribute':''},{'nama':'devi','id':'A005','atribute':''},{'nama':'nanang','id':'A003','atribute':''},{'nama':'sibon','id':'A006','atribute':''}]) 
    })

    const tugases = [{'id':'sw124','judul':'membuat SOP','deskripsi':'Lorem, ipsum iunt itaque atque cupiditate ab facere iste harum laborum quo animi earum, rerum totam!','kpi':'file sistem sop sesuai rapat 09/23/2024','deadline':new Date(),'pelaksana':[{'nama':'alpen','id':'A004',},{'nama':'devi','id':'A005',}]},{'id':'sw123','judul':'membuat kontenplan oktober','deskripsi':'Lorem, ipsum iunt itaque atque cupiditate ab facere iste harum laborum quo animi earum, rerum totam!','kpi':'file sistem sop sesuai rapat 09/23/2024','deadline':new Date(),'pelaksana':[{'nama':'sibon','id':'A006','atribute':''}]}]

    const KPI = "omset 200 jt bulan september 2024"

</script>

    <div class=" mt-20 rencanakerja_card p-1 px-5 my-2 w-full bg-white  flex flex-col rounded-lg ">
        <h6  class=" text-sm mb-3">Rencana Kerja </h6>
        <div class=" flex w-full justify-between">
            <h3>Pelaksanaan SOP produksi konten</h3>

            <div class=" p-2 h-3 rounded bg-green-400 text-xxs text-center flex items-center justify-center text-white "> Setujui </div>
        </div>
        <div class=" flex w-full justify-between text-xs mt-2 text-gray-600">
            <h3>deadline : 12/09/2024</h3>
            <div class=" "> Persentase capaian pekerjaan 60% </div>
        </div>
        <h3 class=" text-xxs">jenis : rutin</h3>
        <p class=" text-sm  mt-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum rem aperiam labore iure ipsa debitis, veniam natus temporibus vero quasi nihil deserunt laboriosam aspernatur, recusandae officiis, dolore dolorum dicta harum. </p>
        </div>

        <div class=" flex w-full bg-gray-50 p-2  text-xs justify-around ">
            <button on:click={()=>{ currentOpenCatatan(true)}} class=" w-20 bg-yellow-400 p-1 text-center rounded-lg text-white font-semibold uppercase "> catatan </button>
            <button on:click={()=>{ currentOpenReport(true)}} class=" w-20 bg-blue-400 p-1 text-center rounded-lg text-white font-semibold uppercase "> report </button>
        </div>
        <div class=" w-full flex flex-col p-5">
            <label for=" " class=" w-full text-center my-2"> Tugas-Tugas</label>
            <div class=" wfull flex text-xxs justify-around w-full bg-slate-50 px-5 py-2">
            <label for=""> cari berdasarkan</label>
            <div class=" flex"> <Person kelas='w-5 h-5 fill-gray-500'></Person> <select class=" mx-1" name="person" id="">
                <option value="semua">semua</option>
                <option value="alpen">alpen</option>
                <option value="sibon">sibon</option>
            </select> </div>

            <select name="status">
                <option value="berjalan">berjalan</option>
                <option value="berjalan">menunggu</option>
                <option value="berjalan">selesai</option>
                <option value="berjalan">ditunda</option>
            </select>
        </div>

        {#each tugases as tugas}
        <TugasRow tugas = {tugas}></TugasRow>
        {/each}
    </div>


    <button on:click={()=>{ currentOpenTambahTugas(true)}} class=" fixed w-10 h-10 bg-red-400 rounded-full bottom-2 right-2"><Plus ukuran='w-10 h-10' warna='stroke-white'></Plus></button>

    <!-- pop up tambah Rencana kerja -->
    {#if $open_pop_tg}
    <TambahTugas></TambahTugas>
    {/if}

    {#if $open_catatan}
    <CatatanRk catatans = {catatans}></CatatanRk>
    {/if}


    {#if $open_report}
    <ReportRenKer KPI={KPI}></ReportRenKer>
    {/if}
