<script lang="ts">
    import Button from '@smui/button';
    import Textfield from '@smui/textfield';
    import '/src/style.scss';
    import { showSnackbar } from '$lib/store.js';

    const getPangram = async () => {
        let input = document.querySelector("#pangramInput input") as HTMLInputElement;
        fetch('http://localhost:8080/anagrams', {
            method: 'POST',
            body: input?.value
        }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
        }).then(text => {
            showSnackbar(text)
        })
    };
    </script>
<div class="b">
    <h1 class="heading">Anagram Checker</h1>
</div>

<div class="mainContainer">
        <Textfield type="text" value="" required id="anagramInput" class="input"/>
    <br>
        <Button type="button" class="mainButton" onclick={getPangram}>Test Anagram</Button>
</div>