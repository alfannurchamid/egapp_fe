<script>
  import { goto } from "$app/navigation";

  // Properti breadcrumb berupa array object [{ name, path }]
  export let items = [];
</script>

<nav aria-label="breadcrumb" class="text-gray-500 text-sm">
  <ul class="flex">
    {#each items as item, index}
      <li class="flex items-center">
        <!-- Tampilkan link jika bukan item terakhir -->
        {#if index < items.length - 1}
          <a
            href="#"
            on:click={() => goto(item.path)}
            class="hover:text-gray-800"
          >
            {item.name}
          </a>
          <span class="mx-2">/</span>
        {:else}
          <!-- Item terakhir tidak memiliki link -->
          <span class="text-gray-800">{item.name}</span>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
