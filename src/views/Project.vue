<template>
  <div>
    <project-details
      v-if="projects.includes(project)"
      :project="project"
      :linkProject="linkProject"
      :linkRepository="linkRepository"
      :linkRepositoryBack="linkRepositoryBack"
      :slidesSrcs="slidesSrcs"
    />
    <p v-else>Sorry this project doesn't exist</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import ProjectDetails from '@/components/ProjectDetails.vue'

const projects = ['podcaster', 'jjoin']

const linkProject = {
  podcaster: 'https://dawalberto.github.io/podcaster',
  jjoin: 'https://github.com/dawalberto/Jjoin/releases',
}

const linkRepository = {
  podcaster: 'https://github.com/dawalberto/podcaster',
  jjoin: 'https://github.com/dawalberto/Jjoin',
}

const linkRepositoryBack = {
  podcaster: '',
  jjoin: '',
}

const slidesSrcs = {
  podcaster: [
    require('@/assets/carousel/podcaster/desktop.png'),
    require('@/assets/carousel/podcaster/desktop-2.png'),
    require('@/assets/carousel/podcaster/desktop-3.png'),
    require('@/assets/carousel/podcaster/mobile.png'),
  ],
  jjoin: [
    require('@/assets/carousel/jjoin/desktop.png'),
    require('@/assets/carousel/jjoin/desktop-1.png'),
    require('@/assets/carousel/jjoin/desktop-2.png'),
    require('@/assets/carousel/jjoin/desktop-3.png'),
    require('@/assets/carousel/jjoin/desktop-4.png'),
  ],
}

export default {
  name: 'Project',
  components: { ProjectDetails },
  setup() {
    const route = useRoute()
    const project = route.params.project

    return {
      project,
      projects,
      linkProject: linkProject[project],
      linkRepository: linkRepository[project],
      linkRepositoryBack: linkRepositoryBack[project],
      slidesSrcs: slidesSrcs[project],
    }
  },
}
</script>

<style scoped></style>
