import { writable, type Writable } from 'svelte/store';

export const snackbarStore: Writable<{ message: string; visible: boolean }> = writable({
	message: '',
	visible: false
});

/**
 * @param {any} message
 */
export function showSnackbar(message: string) {
	snackbarStore.set({ message, visible: true });

	setTimeout(() => {
		snackbarStore.set({ message: '', visible: false });
	}, 2000);
}
