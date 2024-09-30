<script>
    import Style1 from "../../lib/offers/Style1.svelte";
    import Style2 from "../../lib/offers/Style2.svelte";
    import Style3 from "../../lib/offers/Style3.svelte";
</script>

<div class="container py-5">
    <h1>Style 1</h1>
    <div class="row mb-5">
        {#each Array(6) as _, index (index)}
            <div class="col-12 col-md-6 col-xl-4 mb-4">
                <Style1 />
            </div>
        {/each}
    </div>

    <h1>Style 2</h1>
    <div class="mb-4 mb-md-5">
        {#each Array(2) as _, index (index)}
           <Style2 /> 
        {/each}
    </div>

    <h1>Style 3</h1>
    <div class="mb-4 mb-md-5">
        {#each Array(2) as _, index (index)}
           <Style3 /> 
        {/each}
    </div>
</div>
