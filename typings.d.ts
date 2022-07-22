export interface Post {
  _id: string
  createdAt: date
  title: string
  author: {
    name: string
    image: string
  }
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

export interface Project {
  _id: string
  _createdAt: string
  title: string
  description: string
  highlight: boolean
  mainImage: {
    asset: {
      url: string
    }
  }
  mainSkill: {
    title: string
    mainImage: string
  },skill2: {
    name: string
    image: string
  },skill3: {
    name: string
    image: string
  },skill4: {
    name: string
    image: string
  },
  slug: {
    current: string
  }
  body: [object]
}

export interface Skill {
  _id: string
  title: string
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}
