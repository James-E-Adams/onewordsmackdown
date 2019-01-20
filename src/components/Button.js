import withProps from "recompose/withProps"

const className = ({ red }) => ({
  className: "nes-btn " + (red ? "is-error" : "")
})
export default withProps(className)("button")
