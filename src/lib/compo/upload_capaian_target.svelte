<script>
    // @ts-nocheck
    
    import Delete from "$lib/svg/delete.svelte";
    import Plus from "$lib/svg/plus.svelte";
    import X from "$lib/svg/X.svelte";
    import { quintOut } from "svelte/easing";
    import { blur, fly } from "svelte/transition";
    import { slide } from "svelte/transition";
    import { circInOut } from "svelte/easing";
    
    import { currentOpenUpCapaian } from "$lib/stores/openPopTarget";
    import DownloadFile from "./download_file.svelte";
   
    
       let tambah_open = false
       let rotate = 0
    
       let catatan_baru = ''
       export let KPI

        //   status report 0 = belum upload , 1 = acc selesai , 2 = upload , 3 = tolak selesai ,4 tolak revisi 
       let status_report = 2

       let report_files ;

       let prosentase = 30
       let prosentase_change = false
    </script>
    
    
    <div  transition:fly={{ delay: 250, duration: 700, x: 0, y: 900, opacity: 0.5, easing: quintOut }} id="popeditrk" class=" fixed form_pop flex left-0  w-screen h-screen flex-col  items-center pt-20 top-0 z-40 ">
    
        <div class=" w-80 h-10  flex justify-end items-end">
          <div class=" flex ">  
             <div class=" w-5 h-5 bg-black aux-container  bg-opacity-40   self-end "> </div>
             <button on:click={()=>{currentOpenUpCapaian(false)}} class=" h-10 w-10 bg-black rounded-t-2xl  bg-opacity-40 flex justify-center items-end">
                   <X ></X>
             </button>
          </div>
    
        </div>
            <div class="w-80 flex text-white bg-black rounded-tl-3xl rounded-b-3xl  p-5 bg-opacity-40  flex-col items-center  ">
                <div class="flex flex-col items-center w-full justify-center">
                <h4 class=" w-full text-center pb-1 border-b border-white text-white font-semibold mb-3">{#if status_report == 0}upload report{:else}lihat report{/if}</h4>
                <p class=" pb-5 text-white">KPI : {KPI}</p>

                {#if status_report == 0}
              

                {#if report_files}<h8 class="mb-2">{report_files[0].name}</h8>{/if}
                <label for="report" class=" w-32 h-28 bg-white flex justify-center items-center rounded-2xl"> <Plus ukuran='w-20 h-20' warna='stroke-gray-700 '></Plus></label>
                <input bind:files={report_files} type="file" name="report" id='report' class=" hidden" />
                {:else}
                <div class=" w-60 h-10 bg-cyan-400  rounded-lg flex justify-around text-base items-center"> <h5 class=" border-r border-white px-5">download file</h5> <DownloadFile ukuran='w-8 h-8'></DownloadFile></div>

                <!-- aksi  audit setelah report -->
                {#if status_report >2 || status_report ==1}
                    <!-- jika sudah di review audit ,tampilan status--> 
                    <h1 class=" mt-3 text-xl"> status_report : ditolak</h1>
                {:else}
                <!-- jika belum di review audit , audit menilai status -->
                    <div class=" w-full flex text-xxs justify-between mt-8">
                        <div class=" Btn bg-green-500 p-2 my-1"> terima & selesai </div>
                        <div class=" Btn bg-red-500 p-2 my-1"> tolak & selesai </div>
                        <div class=" Btn bg-yellow-500 p-2 my-1"> tolak & revisi </div>
                    </div>
                    {/if}

                {/if}

                <!-- update prosentase capaian (audit) -->
                <div class=" flex w-full p-2  mt-3 flex-col">
                    <h4 class=" ">prosentase capaian %{prosentase}</h4> 
                    <input on:change={()=>{prosentase_change=true}} type="range" max=100 min=0 bind:value={prosentase} class="my-2">
                    <button on:click={()=>{alert('cek')}} disabled={!prosentase_change} class=" BtnSubmit">update</button>
                </div>
            </div>    
        </div>
   
    
    </div> 
    <div transition:blur={{ amount: 10 ,duration:300}} class=" w-screen h-screen fixed  top-0 right-0 z-30 backdrop-blur-lg "></div>
    