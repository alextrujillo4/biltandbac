<template>
    <v-parallax

            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
        <v-row
                align="center"
                justify="center"
        >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-medium ">Te ayudamos a construir tu futuro y cuidamos de ti en tu trayecto</h1>
                <v-row  align="center"
                        justify="center">
                    <v-btn class="ma-2 btn" tile large color="accent">Tile Button</v-btn>
                    <v-btn class="ma-2 btn" tile large color="accent">
                        <v-icon left>mdi-pencil</v-icon> Edit
                    </v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<style >

    .btn {
        text-transform: capitalize;
    }

</style>
