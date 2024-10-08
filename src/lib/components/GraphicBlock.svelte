<script>
  import PatchSvg from "./PatchSVG.svelte";
</script>

<h1>WORK IN PROGRESS - task in blocks</h1>
<div class="graphic-block light mb-4 mb-md-5">
  <div class="container">
    <div class="border-wrap">
      <div class="card">
        <div class="title">How We Rate Casino Sites</div>
        <div class="caption">
          Quisque consectetur fermentum ante sed volutpat. In id augue maximus,
          posuere est nec, lobortis enim. Suspendisse maximus, massa nec
          faucibus tristique, ex ligula volutpat turpis. Quisque consectetur
          fermentum ante sed volutpat.
        </div>

        <div class="pie-chart">
          <div class="pieID pie"></div>
          <ul class="pieID legend">
            <li>
              <PatchSvg />
              <em>Humans</em>
              <span>20</span>
            </li>
            <li>
              <PatchSvg />
              <em>Dogs</em>
              <span>20</span>
            </li>
            <li>
              <PatchSvg />
              <em>Cats</em>
              <span>20</span>
            </li>
            <li>
              <PatchSvg />
              <em>Slugs</em>
              <span>20</span>
            </li>
            <li>
              <PatchSvg />
              <em>Aliens</em>
              <span>20</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .pie::before {
    background: url("/images/man-laptop-cricle.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
