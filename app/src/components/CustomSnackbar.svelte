<script lang="ts">
    import Snackbar from '@smui/snackbar';
    import { snackbarStore } from '$lib/store.js';

    let message = '';
    let snackbar: Snackbar; 
    
    snackbarStore.subscribe(({ message: msg, visible: visible }) => {
        if (msg !== message ) {
            message = msg;

            if (visible) {
                snackbar?.open(); // Show the snackbar
            } else {
                snackbar?.close();
            }
        }
        
    });
</script>

<Snackbar bind:this={snackbar}>
    <span class="snackbarMessage">{message}</span>
</Snackbar>
