

<script lang="ts">
    import Tab, {Label} from '@smui/tab';
    import TabBar from '@smui/tab-bar';
	import Anagram from '../components/Anagram.svelte';
    import Pangram from '../components/Pangram.svelte';

    let active = $state('Pangram');
</script>

<header class="header">
    <TabBar tabs={['Pangram', 'Anagram', 'About Us']} bind:active>
        {#snippet tab(tab)}
          <!-- Note: the `tab` property is required! -->
          <Tab {tab}>
            <Label>{tab}</Label>
          </Tab>
        {/snippet}
      </TabBar>
    </header>
        {#if active === 'Pangram'}
            <Pangram/>
        {:else if active === 'Anagram'}
            <Anagram/>
        {/if}



<style>

    .header {
        background: linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(0, 0, 255, 0.7));
    }

</style>
