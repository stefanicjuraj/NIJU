<script>
  import "../app.postcss";
  import "./styles.css";
  import Navbar from "../components/Navbar.svelte";
  
</script>

<div class="app">
  <main>
    <slot />
    <Navbar />
  </main>

</div>
