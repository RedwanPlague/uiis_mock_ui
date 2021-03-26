export function setUser (context, user) {
  context.commit('setUser', user)
}

export function addBadge (context, index) {
  context.commit('addBadge', index)
}

export function clearBadge (context, index) {
  context.commit('clearBadge', index)
}
