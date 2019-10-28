<template>
    <dashboard>
        <div>
            <h2>Cattle Diseases</h2>
            <div class="row gap-20 masonry pos-r">
                <div class="col col-md-7">
                    <disease-accordion :diseases="diseases"></disease-accordion>
                </div>
                <div class="col col-md-5">
                    <disease-links :links="links"></disease-links>
                </div>
            </div>
        </div>
    </dashboard>
</template>

<script>
import dashboard from "@/layouts/Dashboard.vue";
import diseaseAccordion from "@/components/DiseaseAccordion.vue"
import diseaseLinks from "@/components/DiseaseLinks.vue"

export default {
    name: "Cattle",
    components: {
        diseaseAccordion,
        diseaseLinks,
        dashboard
    },
    data: function () {
        return {
            diseases: [{
                    name: "Disease 1",
                    disease: {
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum incidunt, ipsum voluptatibus praesentium quis quam hic a minus illum? Est architecto officia ab labore porro, consequatur vero ullam nam?",
                        causes: ["Cause 1", "Cause 2", "Cause 3", "Cause 4"],
                        symptoms: ["Symptom 1", "Symptom 2", "Symptom 3", "Symptom 4"],
                        treatment: ["Treatment 1", "Treatment 2", "Treatment 3", 'Treatment 4'],
                        img: "cattle/sick1"
                    }
                },
                {
                    name: "Disease 2",
                    disease: {
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum incidunt, ipsum voluptatibus praesentium quis quam hic a minus illum? Est architecto officia ab labore porro, consequatur vero ullam nam?",
                        causes: ["Cause 1", "Cause 2", "Cause 3", "Cause 4"],
                        symptoms: ["Symptom 1", "Symptom 2", "Symptom 3", "Symptom 4"],
                        treatment: ["Treatment 1", "Treatment 2", "Treatment 3", 'Treatment 4'],
                        img: "cattle/sick2"
                    }
                },
                {
                    name: "Disease 3",
                    disease: {
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt cum incidunt, ipsum voluptatibus praesentium quis quam hic a minus illum? Est architecto officia ab labore porro, consequatur vero ullam nam?",
                        causes: ["Cause 1", "Cause 2", "Cause 3", "Cause 4"],
                        symptoms: ["Symptom 1", "Symptom 2", "Symptom 3", "Symptom 4"],
                        treatment: ["Treatment 1", "Treatment 2", "Treatment 3", 'Treatment 4'],
                        img: "cattle/sick3"
                    }
                }
            ],
            links: [{
                    text: "Google",
                    href: "https://google.com.ng"
                },
                {
                    text: "Easyasitis",
                    href: "https://easyasitis.com.ng"
                },
                {
                    text: "Facebook",
                    href: "https://facebook.com"
                }
            ]
        }
    }
};
</script>

<style>
.accordion .card-header {
    cursor: pointer;
}
</style>
