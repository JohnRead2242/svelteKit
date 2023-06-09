<script>
  export let data;
</script>

<ul>
  {#each data.posts as { id, title }}
    <li><a href="/posts/{id}">{title}</a></li>
  {/each}
</ul>
