<script>
  import Person from "$lib/svg/person.svelte";

 
export let data
</script>

<div class=" flex text-left w-full bg-white p-2 py-0 mb-5 text-sm">
    <div class=" flex items-center justify-center rounded-full w-12 h-12 min-w-12 mx-2 bg-gray-200">
        <Person kelas='w-12 h-12 fill-gray-500'></Person>
    </div> 
    <p class=" max-w-fit mx-2 ">
        <b>{data.subject}</b>
        {data.contex} : {data.object}
        <em class=" text-gray-500 not-italic">
        {data.date_time}
        </em>  
    </p>
    <div class="  mx-2 flex items-start">
        <button class="Btn bg-blue-500 h-5 min-w-20 p-4 "> lihat </button>
    </div>
 </div>