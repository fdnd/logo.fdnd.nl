<script>
  const { name } = $props()
</script>

<svg viewBox="0 0 425 310" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style type="text/css">
      :root {
        --stroke: #050542;
        --fill: #ECECEC;
        --stroke-width: 8;
      }
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400..800;1,400..800');
      rect {
        stroke: var(--stroke);
        fill: var(--fill);
        stroke-width: var(--stroke-width);
      }
      text {
        font-family: 'Open Sans';
        fill: var(--stroke);
      }
      text#name {
        font-size: 70px;
        font-weight: 400;
        letter-spacing: -.7px;
      }
      text#fdnd {
        font-size: 90px;
        font-weight: 800;
        letter-spacing: -.8px;
      }
    </style>
  </defs>
  
  <rect x="6" y="20" width="400" height="286" rx="30" ry="30" />
  <rect x="20" y="6" width="400" height="286" rx="30" ry="30" />
  <text id="name" x="42" y="174">{name}</text>
  <text id="fdnd" x="42" y="254">FDND</text>
</svg>