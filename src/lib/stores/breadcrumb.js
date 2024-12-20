import { writable } from "svelte/store";


export const breadcrumbs = writable([
    { label: "Dashboard", href: "/A004/dashboard_direksi" }
]);
