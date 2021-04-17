<template>
    <v-card outlined elevation="0" @click="viewPost(entity.fields.slug)">
        <v-card-title>{{ entity.fields.title }}</v-card-title>
        <v-card-subtitle v-if="createdAt">
            {{ createdAt | formatDate }}
        </v-card-subtitle>
        <v-card-subtitle v-else>
            {{ updatedAt | formatDate }}
        </v-card-subtitle>
        <v-card-actions v-if="entity.fields.tags">
            <v-chip v-for="tag in entity.fields.tags" :key="tag">
                <v-icon left>label</v-icon>
                {{ tag }}
            </v-chip>
        </v-card-actions>
    </v-card>
</template>

<script>
import filters from '~/filters';

export default {
    name: 'article-preview',
    props: [
        'entity'
    ],
    filters: {
        ...filters
    },
    computed: {
        createdAt: function () {
           return this.entity?.sys.createdAt;
        },
        updatedAt: function () {
            return this.entity?.sys.updatedAt;
        }
    },
    methods: {
        viewPost: function (slug) {
            this.$router.push(`/posts/${slug}`)
        }
    }
}
</script>

<style scoped>

</style>