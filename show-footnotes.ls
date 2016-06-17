show-tooltip = (el) ->
  return ->
    # assume the element is a <sup>
    tip = document.create-element \div
    tip.class-name = "tooltip"

    tip.style.top = (el.get-bounding-client-rect!.bottom + 10) + \px
    # assume first parent div (not p) is the column
    container = el.closest('div').get-bounding-client-rect!
    tip.style.left = container.left + \px
    tip.style.width = container.width + \px

    # strip off "fnref"
    elnum = el.query-selector(\a).id.slice 5
    tip.innerHTML = document.body.query-selector("\#fn#elnum").innerHTML
    this.onmouseout = ->
      tip.hider = set-timeout remove-tooltips, 200
      tip.onmouseover = div-over

    document.body.append-child tip

div-over = ->
  clear-timeout this.hider
  this.onmouseout = ->
    this.hider = set-timeout remove-tooltips, 200

remove-tooltips = ->
  for tip in document.body.query-selector-all ".tooltip"
    tip.remove!

main = ->
  refs = document.body.query-selector-all \.footnote-ref
  for ref in refs
    ref.onmouseover = show-tooltip ref

main!
