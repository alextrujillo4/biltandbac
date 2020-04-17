<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <template v-slot:activator="{ on }">
                <v-btn
                        color="red lighten-2"
                        dark
                        v-on="on"
                >
                    Click Me
                </v-btn>
            </template>

            <v-card>
                <v-card-title
                        class="headline grey lighten-2"
                        primary-title
                >
                    Mensaje enviado
                </v-card-title>

                <v-card-text>
                    Hemos enviado tu mensaje. Un representante se contactará pronto contigo.
                    para más dudas puedes escribirnos
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=528112904687&text=&source=&data="
                >por whatsapp aquí</a>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                    >
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>