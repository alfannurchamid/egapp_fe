<script>
  import { goto } from "$app/navigation";

  const portal = ()=>{
    goto('dashboard_manager')
  }

</script>
<!-- <div  class=" relative w-full h-20 max-w-screen-md overflow-x-scroll mt-20 flex items-center ">

    <div style=" width: auto;" class="flex absolute   w-full  h-16  items-center px-2  "> 
       <div class="flex text-gray-700 items-center w-20 flex-col mx-2.5  ">
           <div class="  h-14 w-14 rounded-full bg-gray-400"></div>
           <ul>agro bisnis</ul>
       </div>
    </div> 

</div> -->


<div class=" w-full flex text-sm mt-20 pt-8 ">

    
    <!-- inni card jobs divisi report  -->
    <button  on:click={()=>{portal()}} id="card_div" class="w-full flex p-3 px-5 drop-shadow bg-white  h-40">
        <div id="kanan" class="  w-[40%]" >
            <div class=" flex items-center ">
                <div class="  h-12 w-12 rounded-full bg-gray-400"></div>
                <h4 class=" mx-2 ">  Agro Bisnis </h4>
            </div>
            <h5 class=" text-xs mt-3">Jumlah karyawan : 10</h5>
            <h5 class=" text-xs">Jumlah staf : 8</h5>
        </div>
        <div class=" text-xxs flex flex-col items-center w-[60%]">
        
            <p class=" text-sm border-b border-slate-400 pb-2">6 target | 10 rencana kerja</p>
            <div id="nilai" class=" text-center flex flex-col item-center">
                <h4>capaian pelaksanaan tugas</h4>
                <h8 class=" text-xxs" >bulan september</h8>
                <div class=" grid grid-cols-2 grid-row-2 gap-2 mt-1  text-xs">
                    
                    <div class=" flex ">
                        <div class=" w-8 rounded bg-yellow-400 mr-1">P0</div> 8 <i class=" ml-1 text-xxxs"> tugas tercapai </i> 
                    </div>
                    <div class=" flex ">
                        <div class=" w-8 rounded bg-yellow-300 mr-1">P1</div> 8 <i class=" ml-1 text-xxxs"> tugas tercapai </i> 
                    </div>
                    <div class=" flex ">
                        <div class=" w-8 rounded bg-yellow-200 mr-1">P2</div> 8 <i class=" ml-1 text-xxxs"> tugas tercapai </i> 
                    </div>
                    <div class=" flex ">
                        <div class=" w-8 rounded bg-yellow-100 mr-1">P3</div> 8 <i class=" ml-1 text-xxxs"> tugas tercapai </i> 
                    </div>
                
                </div>
                <div class='w-28 mt-2 bg-red-400 text-white rounded'> 10 tugas terhambat</div>
            </div>
        </div>
    </button>



</div>