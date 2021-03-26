export function setUser (state, user) {
  state.user = user
}

export function addBadge (state, index) {
  state.sidebarLinks[index].badge = 1
}

export function clearBadge (state, index) {
  state.sidebarLinks[index].badge = 0
}
