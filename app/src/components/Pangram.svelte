<script lang="ts">
    import Button from '@smui/button';
    import Snackbar, { Label } from '@smui/snackbar';
    import Textfield from '@smui/textfield';
    import '/src/style.scss';

    let snackbar: Snackbar;
    let snackbarText = $state('');
    
    const getPangram = async () => {
        console.log("turtle");
        let input = document.querySelector("#pangramInput input") as HTMLInputElement;
        console.log("input = ", input);
        console.log("mystring = ", input?.value);
        const res = fetch('http://localhost:8080/pangrams', {
            method: 'POST',
            body: input?.value
        }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text(); // Parse the response body as text
        }).then(text => {
            snackbarText = text;
            snackbar.open();
        // Handle the returned data
        console.log('Returned text:', text);
        })
        console.log('res = ', res);
    };
    </script>
<div class="b">
    <h1 class="heading">Pangram Checker</h1>
</div>

<div class="mainContainer">
        <Textfield type="text" value="" required id="pangramInput" class="pangramInput"/>
    <br>
        <Button type="button" class="mainButton" onclick={getPangram}>Test Pangram</Button>
</div>

<Snackbar bind:this={snackbar} labelText={snackbarText}>
    <Label />
</Snackbar>