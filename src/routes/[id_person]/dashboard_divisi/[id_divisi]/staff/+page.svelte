<script>
  import { page } from "$app/stores";
  import { GetCookie } from "$lib/stores/cokies";
  import { onMount } from "svelte";
  import RencanaKerjaRow from "$lib/compo/rencana_kerja_row.svelte";
  import { Falidate } from "$lib/dependedncies/falidate_session_login";

  /**
   * @type {any[]}
   */
  let rencanaKerjas = []

  const get_renkers = async ()=>{
  let accessKey = GetCookie('accesskey')
    const response = await fetch('http://localhost:8000/api/api/v1/rencana_kerja/get_rencana_kerjas',
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
})
</script>

<div class=" flex flex-col w-full mt-20 ">


{#each rencanaKerjas as rk}
<RencanaKerjaRow rencana_kerja = {rk}></RencanaKerjaRow>
{/each}

</div>
