import withProps from "recompose/withProps"

const style = {
  marginLeft: "auto",
  marginRight: 20,
  backgroundColor: "#282c34",
  fontSize: 20,
  border: "white solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 40,
  color: "white",
  borderRadius: 100
}

export default withProps({ style })("button")
