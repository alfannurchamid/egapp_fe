<script>
  import { goto } from "$app/navigation";

    const portal = ()=>{
    goto('target/9s')
  }
</script>
<div class=" w-full flex flex-col text-sm mt-20 pt-2 px-2">
  <h1 class=" capitalize text-lg text-center my-2">divisi agro bisnis</h1>
  <!-- inni card jobs divisi report  -->
  <div id="card_div" class="w-full flex p-3 px-5 drop-shadow bg-white h-40">
    <div id="kanan" class="  w-[40%]">
      <div class=" flex items-center">
        <div class="  h-12 w-12 rounded-full bg-gray-400"></div>
        <h4 class=" mx-2">Agro Bisnis</h4>
      </div>
      <h5 class=" text-xs mt-3">Jumlah karyawan : 10</h5>
      <h5 class=" text-xs">Jumlah staf : 8</h5>
    </div>
    <div class=" text-xxs flex flex-col items-center w-[60%]">
      <p class=" text-sm border-b border-slate-400 pb-2">
        6 target | 10 rencana kerja
      </p>
      <div id="nilai" class=" text-center flex flex-col item-center">
        <h4>capaian pelaksanaan tugas</h4>
        <h8 class=" text-xxs">bulan september</h8>
        <div class=" grid grid-cols-2 grid-row-2 gap-2 mt-1 text-xs">
          <div class=" flex">
            <div class=" w-8 rounded bg-yellow-400 mr-1">P0</div>
            8<i class=" ml-1 text-xxxs"> tugas tercapai </i>
          </div>
          <div class=" flex">
            <div class=" w-8 rounded bg-yellow-300 mr-1">P1</div>
            8<i class=" ml-1 text-xxxs"> tugas tercapai </i>
          </div>
          <div class=" flex">
            <div class=" w-8 rounded bg-yellow-200 mr-1">P2</div>
            8<i class=" ml-1 text-xxxs"> tugas tercapai </i>
          </div>
          <div class=" flex">
            <div class=" w-8 rounded bg-yellow-100 mr-1">P3</div>
            8<i class=" ml-1 text-xxxs"> tugas tercapai </i>
          </div>
        </div>
        <div class="w-28 mt-2 bg-red-400 text-white rounded">
          10 tugas terhambat
        </div>
      </div>
    </div>
  </div>

<!-- target slade -->
  <div class=" w-full my-5 p-3">
    <h3 class="ml-2 text-gray-500">3 target divisi marketing</h3>
    <div class=" relative w-full h-40  overflow-x-scroll mt-2 flex items-center">
      <div style=" width: auto;" class="flex absolute w-full h-full items-center px-2">
        <!-- card -->
        <button on:click={()=>{portal()}} class="flex text-gray-700 p-2 w-[80vw] md:w-80 h-40 bg-slate-50 flex-col mx-2.5">
         <h3>1. Omset cafe 200 jt bulan september</h3>
          <div class="  h-full w-fuull flex  ">
            <div class=" w-7/12 pr-3 text-xs mt-3 text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            <div class=" border-l w-5/12 p-2 h-[80%] mt-2 flex justify-center flex-col">
              <h6>KPI : omset </h6>
              <h6 class=" text-xxxs mt-2">Current omset </h6>
              <h6 class=" ">Rp 50.000.000 </h6>
              <h6 class=" text-xxxs mt-2">persentase capaian 25%</h6>
              <div class=" w-28 h-1 bg-slate-200 ">
                <div class=" h-1 w-[25%] bg-green-500"></div>
              </div>
              <h6 class=" text-xxxs mt-2">diperbarui 10 september</h6>
            </div>
          </div>
        </button>
        <div class="flex text-gray-700 items-center w-[80vw] h-40 bg-yellow-200 flex-col mx-2.5">
          <div class="  h-14 w-14  bg-gray-400"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- llist rencana kerja-->
  <div class=" container p-3">
    <h5 class="ml-2 mb-2 text-gray-500">capaian rencana kerja</h5>

    <!-- card -->
    <div class=" rencanakerja_card p-1 px-2 h-12 my-2  w-full bg-white drop-shadow flex flex-col rounded-lg ">
      <div class=" flex w-full justify-between">
        <h3>Pelaksanaan SOP produksi konten</h3>
        <div class=" w-16 h-3 rounded bg-green-500 text-xxs text-center flex items-center justify-center text-white"> Tercapai  </div>
      </div>
      <div class=" flex w-full justify-between text-xxxs mt-2 text-gray-600">
        <h3>deadline : 12/09/2024</h3>
        <div class=" "> Persentase capaian pekerjaan 60% </div>
      </div>
    </div>

    <div class=" rencanakerja_card p-1 px-2 my-2 h-12 w-full bg-white drop-shadow flex flex-col rounded-lg ">
      <div class=" flex w-full justify-between">
        <h3>Pelaksanaan SOP produksi konten</h3>
        <div class=" w-16 h-3 rounded bg-green-500 text-xxs text-center flex items-center justify-center text-white"> Tercapai  </div>
      </div>
      <div class=" flex w-full justify-between text-xxxs mt-2 text-gray-600">
        <h3>deadline : 12/09/2024</h3>
        <div class=" "> Persentase capaian pekerjaan 60% </div>
      </div>
    </div>

    <div class=" rencanakerja_card p-1 px-2 my-2 h-12 w-full bg-white drop-shadow flex flex-col rounded-lg ">
      <div class=" flex w-full justify-between">
        <h3>Pelaksanaan SOP produksi konten</h3>
        <div class=" w-16 h-3 rounded bg-green-500 text-xxs text-center flex items-center justify-center text-white"> Tercapai  </div>
      </div>
      <div class=" flex w-full justify-between text-xxxs mt-2 text-gray-600">
        <h3>deadline : 12/09/2024</h3>
        <div class=" "> Persentase capaian pekerjaan 60% </div>
      </div>
    </div>
    

 <div class=" w-fuull flex justify-center"> <a href="/#" class=" text-blue-500 mt-2">lihat lebih banyak v</a></div>
  </div>


  <!-- daftar anggota -->

  <div class=" w-full flex flex-col  px-3 ">
    <h5 class="ml-2 mb-2 text-gray-500">anggota</h5>
  <!-- card -->
    <div class=" w-full flex p-1 border-b ">
        <div class=" w-1/3 h-10   flex items-center border-r border-slate-300">
          <div class="h-8 w-8 bg-slate-400 mx-2 rounded-full"></div>
          <h4>Alpen</h4>
        </div>
        <div class=" w-2/3 h-10  justify-between flex items-start p-1 ">
        <h4>SPV</h4> 

        <div class=" flex flex-col" >
        <div class=" flex text-xxs">
            <div class="mb-1  w-5  rounded bg-yellow-400 mr-1 text-center">8</div>
          <i class="   text-xxs"> tugas tercapai </i>
          </div>
          <div class=" flex text-xxs">
            <div class="  w-5  rounded bg-red-400 mr-1 text-center">2</div>
          <i class="   text-xxs"> tugas terhambat </i>
          </div>
        </div>
      </div>
    </div>
    <div class=" h-20 w-full">

    </div>
  </div>
</div>
