export function sidebarLinks (state) {
  if (!state.user) return []

  const tempLinks = state.sidebarLinks
  if (state.user.startsWith('Normal')) {
    return tempLinks.filter(link => !link.title.startsWith('Head') && !link.title.startsWith('Provost'))
  }
  if (state.user.startsWith('Head')) {
    return tempLinks.filter(link => !link.title.startsWith('Provost'))
  }
  if (state.user.startsWith('Provost')) {
    return tempLinks.filter(link => !link.title.startsWith('Head'))
  }

  return tempLinks
}

export function user (state) {
  return state.user
}

export function adminLinks (state) {
  return state.adminLinks
}
