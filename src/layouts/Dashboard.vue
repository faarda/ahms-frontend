<template>
    <div>
        <!-- left sidebar -->
        <app-sidebar></app-sidebar>

        <!-- Main-->
        <div class="page-container">
            <!-- header -->
            <app-header></app-header>

            <!-- $App Screen Content -->
            <main class="main-content bgc-grey-100">
                <div id="mainContent">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import appSpinner from "@/components/Spinner.vue";
import appSidebar from "@/components/Sidebar.vue";
import appHeader from "@/components/Header.vue";

export default {
    components: {
        appSpinner,
        appSidebar,
        appHeader
    }
};
</script>
