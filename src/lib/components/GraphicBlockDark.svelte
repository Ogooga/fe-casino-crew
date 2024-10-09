<script>
  import { onMount } from "svelte";
  import jq from "jquery";

  onMount(() => {
    function sliceSize(dataNum, dataTotal) {
      return (dataNum / dataTotal) * 360;
    }

    function addSlice(sliceSize, pieElement, offset, sliceID, color) {
      // Append the slice with a span (clipped element)
      jq(pieElement).append(
        "<div class='slice " + sliceID + "'><span></span></div>"
      );

      // Rotate the slice (div) and its content (span)
      jq("." + sliceID).css({
        transform: "rotate(" + offset + "deg) translate3d(0,0,0)",
      });

      jq("." + sliceID + " span").css({
        transform: "rotate(" + sliceSize + "deg) translate3d(0,0,0)",
        "background-color": color,
        clip: `rect(0px, ${jq(pieElement).width()}px, ${jq(pieElement).width()}px, ${
          jq(pieElement).width() / 2
        }px)`, // Adjust clipping dynamically based on pie width
      });
    }

    function iterateSlices(
      sliceSize,
      pieElement,
      offset,
      dataCount,
      sliceCount,
      color
    ) {
      var sliceID = "s" + dataCount + "-" + sliceCount;
      var maxSize = 179;
      if (sliceSize <= maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color);
      } else {
        addSlice(maxSize, pieElement, offset, sliceID, color);
        iterateSlices(
          sliceSize - maxSize,
          pieElement,
          offset + maxSize,
          dataCount,
          sliceCount + 1,
          color
        );
      }
    }
    function createPie(dataElement, pieElement) {
      var listData = [];
      jq(dataElement + " span").each(function () {
        listData.push(Number(jq(this).html()));
      });
      var listTotal = 0;
      for (var i = 0; i < listData.length; i++) {
        listTotal += listData[i];
      }
      var offset = 0;
      var color = ["#2C1D2E", "#5A2835", "#E1E17D", "#452141", "#C3653E"];

      for (var i = 0; i < listData.length; i++) {
        var size = sliceSize(listData[i], listTotal);
        iterateSlices(size, pieElement, offset, i, 0, color[i]);

        // Update SVG color for legend
        jq(dataElement + " li:nth-child(" + (i + 1) + ") .legend-circle").css(
          "background",
          color[i]
        );

        offset += size;
      }
    }

    createPie(".graphic-block.dark .pieID.legend", ".pieID.pie");
  });
</script>

<div class="graphic-block dark mb-4 mb-md-5">
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
              <div class="legend-circle"></div>
              <em>Humans</em>
              <span>20</span>
            </li>
            <li>
              <div class="legend-circle"></div>
              <em>Dogs</em>
              <span>20</span>
            </li>
            <li>
              <div class="legend-circle"></div>
              <em>Cats</em>
              <span>20</span>
            </li>
            <li>
              <div class="legend-circle"></div>
              <em>Slugs</em>
              <span>20</span>
            </li>
            <li>
              <div class="legend-circle"></div>
              <em>Aliens</em>
              <span>20</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="shape"></div>
</div>

<style>
  .pie::before {
    background: url("/images/man-laptop-cricle.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
