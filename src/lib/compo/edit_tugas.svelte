
<script>
// @ts-nocheck

    import { circInOut, quintOut } from "svelte/easing";
    import Check from "$lib/svg/check.svelte";

    // @ts-ignore
    // @ts-ignore
    import { currentOpenEditTugas, pelaksana, currentOpenTambahTugas,currentOpenElementId, open_pop_element_id } from "$lib/stores/openPopTugas"
    import { fly, slide,blur} from "svelte/transition";
    import Dropdown from "$lib/svg/dropdown.svelte";
    import Delete from "$lib/svg/delete.svelte";
    import { onMount } from "svelte";
    let nama_pelaksana =''

    
    /**
     * @type {any}
     */
    export let tugas;
    export let staff

    let staff_sekarang = staff.slice()
    
    let is_lengkap = true
    /**
   * @type {any[]}
   */
    // @ts-ignore
    let staf_terpilih = []
    // @ts-ignore
    // @ts-ignore
    let staf_terpilih_id= []
    

    
    onMount(async()=>{

        console.log(staff_sekarang)
         //falidasi element terpanggil
         if($open_pop_element_id == tugas.id ){    
        console.log('cek mount')
        // @ts-ignore
        for(let x=0;x < tugas.pelaksana.length;x++){
            const id_staff = tugas.pelaksana[x].id
            console.log(id_staff)

            const target = document.getElementById(id_staff)?.classList
 
             staf_terpilih.push(staff.filter( (/** @type {{ id: any; }} */ staff_sekarang) => staff_sekarang.id == id_staff)[0])
            // styling
       



            var foundIndex = staff_sekarang.findIndex((/** @type {{ id: any; }} */ x) => x.id == id_staff);
      
            staff_sekarang[foundIndex].atribute = 'text-black stroke-green-500'

            is_lengkap = false
            // @ts-ignore
            nama_pelaksana = staf_terpilih.map(function(item) {
                                                    return item['nama'];
                                                    });
        }
        }})
        // form pengisian

        let opDdStaff = false;
            



    const updateStaffPilih= (/** @type {string} */ id_staff) =>() =>{
            // cari index staff di pelaksana

            var foundIndex = staff_sekarang.findIndex((/** @type {{ id: any; }} */ x) => x.id == id_staff);
       
            // cek id in staf terpilih
            const target = document.getElementById(id_staff)?.classList
            if(staf_terpilih.some(element => element.id === id_staff)){
                // remove jika  ada = remove
                staf_terpilih = staf_terpilih.filter( staf_terpilih => staf_terpilih.id !== id_staff)
                // styling
                staff_sekarang[foundIndex].atribute = ''
                
            }else{
                // add jika ga ada = add
                staf_terpilih.push(staff.filter( (/** @type {{ id: string; }} */ staff) => staff.id == id_staff)[0])
                // styling
                staff_sekarang[foundIndex].atribute = 'text-black stroke-green-500'

            }

            if(staf_terpilih.length !== 0){
                is_lengkap = false
                // @ts-ignore
                nama_pelaksana = staf_terpilih.map(function(item) {
                                                        return item['nama'];
                                                        });
            }else{
                is_lengkap = true
                nama_pelaksana=''
            }
        }
    
    let date = (tugas.deadline).toJSON().slice(0, 10);
    $:console.log(date)
</script>
<div transition:fly={{ delay: 250, duration: 700, x: 0, y: 900, opacity: 0.5, easing: quintOut }} id="popaddrk" class=" flex fixed w-screen min-h-screen flex-col pb-20   items-center pt-20 top-0 right-0 z-40  ">
    <div class=" w-80 h-10  flex justify-end items-end">
        <div class=" w-5 h-5 bg-black aux-container  bg-opacity-40  "></div>
        <div class=" h-10 w-10 bg-black rounded-t-2xl  bg-opacity-40 flex justify-center items-end">
           <Delete dimensi='w-8 h-8' color='stroke-white'></Delete>
        </div>
     </div>
   
        <form action="" class=" flex flex-col form_pop w-80  bg-black bg-opacity-40 rounded-3xl  rounded-tr-none p-5  ">
          <h4 class=" text-base text-white  text-center w-full ">edit tugas </h4>
         <label for="judul" class=" text-sm text-white mb-1">judul</label>
         <input bind:value={tugas.judul} name="judul" type="text" class=" h-8 rounded-lg px-2 mb-4" >
  
         <label for="deskripsi" class=" text-sm text-white mb-1" >deskripsi</label>
         <textarea name="deskripsi"  class=" min-h-20 rounded-lg px-2  mb-4" bind:value={tugas.deskripsi} /> 
  
         <label for="kpi" class=" text-sm text-white mb-1">KPI</label>
         <input name="dateline" type="text" class=" h-8 rounded-lg px-2 mb-4" bind:value={tugas.kpi} >
  
         <label for="dateline" class=" text-sm text-white mb-1" >deadline</label>
  
         <input name="pelaksana" type="date" class=" h-8 rounded-lg px-2 mb-4" value={date}  on:input={e => date = e.target.value || date} >
  
         <label for="pelaksana" class=" text-sm text-white mb-1">pelaksanaan
        </label>
              
          <div class=" bg-white py-2 rounded-lg px-2 mb-4  cursor-pointer">
              <button on:click={()=>{opDdStaff = !opDdStaff}} class=" w-full flex justify-between items-center px-2">
                  <label for="">{nama_pelaksana}</label>
                  {#if opDdStaff}
                      
                  <div  class="rotate-180">
                      <Dropdown kelas='w-8 h-8'></Dropdown>
                  </div>
                  {:else}
                  <Dropdown kelas='w-8 h-8'></Dropdown>
                  {/if}
              </button>
              {#if  opDdStaff}
              <div transition:slide={{ delay: 250, duration: 300, easing: circInOut, axis: 'y' }}  
                  id="dropdownstaff" class=" duration-700  w-full flex-col text-gray-500  flex overflow-hidden ">
                  {#each staff_sekarang as stafff }
                    <button on:click={updateStaffPilih(stafff.id) } id='{stafff.id}' class=" {stafff.id} p-1 px-5 border-b  flex justify-between {stafff.atribute}  " >{stafff.nama} <Check kelas='w-5 h-5  ' kelas2='stroke-2 '></Check></button> 
                  {/each}
              </div>
              {/if}
              
         </div>
  
         <div class=" mt-5 grid grid-cols-2 grid-rows-1 gap-3">
            <button on:click={()=>{currentOpenElementId('false') }}  class=" BtnNegative  ">batal</button>
            <button id="BtnSubmit" type="submit" disabled ={is_lengkap} class="   BtnSubmit w-full h-10  ">simpan</button>
          </div>
          
      </form>
   
  </div>

  <div transition:blur={{ amount: 10 ,duration:300}} class=" w-screen h-screen fixed  top-0 right-0 z-30 backdrop-blur-lg "></div>
