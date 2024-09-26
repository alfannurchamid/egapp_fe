<script>
// @ts-nocheck

    import logo from "$lib/img/LOGO_EG.svg"
    import { Input } from "postcss";

    let Sandi = ""
    let NIK = ""
    let Lengkap = false

    const CekSandi = ()=>{
        console.log(Sandi)
        const target =  document.getElementById("TbMasuk")?.classList
        if(Sandi.length >0){
            target?.remove("TbPasif")
            target?.add("TbAktif")
            Lengkap = true
        }else{
            target?.remove("TbAktif")
            target?.add("TbPasif")
            Lengkap = false
        }

    }

    const TampilkanSandi = ()=> { 
        const input = document.getElementById("inpSandi")
        // console.log((input.attributes["type"].value))
        if(input.attributes["type"].value == 'password'){

            input.setAttribute("type", "text"); 
          
        }else{
            input.setAttribute("type", "password"); 
            
        }
        }
</script>
<div class="  flex flex-col items-center justify-center p-5 bg-gray-100">

    <img class=" w-28 mt-5 mb-10" src="{logo}" alt="logo">
    <div class=" p-5 text-gray-700 flex container rounded-lg drop-shadow-lg justify-center flex-col items-center bg-white"> 
        <h1 class=" text-lg font-semibold mb-3 ">Masuk ke Task Managemet </h1>
       <form class=" w-full">

    
      
         <div class="w-full flex flex-col my-1 ">
             <label for="nik" class=" text-xs" >Nik</label>
             <input bind:value={NIK} id="nik" placeholder="Contoh: 3307011203000000" class=" placeholder:text-gray-300  px-3 placeholder:text-sm  my-1 h-9 rounded-lg border border-collapse border-gray-300 focus:border-gray-700 focus:border "  type="text">
            <p id="alert_nik" class="text-xs text-red-400 hidden">NIK harus diisi</p>
            
            </div>
        <div class="w-full flex flex-col my-1 ">
            <label for="sandi" class=" text-xs" >Kata Sandi</label>
            <input id="inpSandi" on:keyup={()=>{CekSandi()}} bind:value={Sandi}   placeholder="Contoh: Sandi123!" class=" placeholder:text-gray-300  px-3 placeholder:text-sm  my-1 h-9 rounded-lg border border-collapse border-gray-300 focus:border-gray-700"  type="password">
            <p id="alert_sandi" class="text-xs text-red-400 hidden">NIK harus diisi</p>
            
            <button   on:click={()=>{TampilkanSandi()}} class="text-xs self-end mr-3">tampilkan sandi</button>

        </div>
        <label  for="" class="text-xs self-start mt-2 mb-5 text-gray-400 font-semibold  ">Lupa kata sandi?</label>

        <input type="submit" id="TbMasuk" class=" mt-5 cursor-default TbPasif w-full h-10 rounded-lg  items-center flex justify-center font-semibold  " value="Masuk"/>
    </form>
        <div class=" text-sm text-gray-400  my-5 ">Belum punya akun ? <a href="/daftar" class="mx-2 font-semibold">Daftar</a> </div>
    </div>
    <p class=" text-sm text-gray-400 my-10">2024. Eka Group Indonesia</p>
</div>