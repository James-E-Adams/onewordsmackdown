# One word smackdown!

I let the domain lapse because $$$. 

A one word typing extravaganza.
[Check it out!](https://onewordsmackdown.xyz/)

Created using `create-react-app`. Hosted on https://now.sh.

#

## Notes:

- Don't take this an example on how to do styling in React. I personally like using utility-based CSS (i.e TailwindCSS or Tachyons) - but there are lots of ways to do it that would be better than what's happening in this codebase. To build this as quickly/hackily as possible, the styling is all inline which generates new objects on rerender and isn't very performant.
- I'd also say mixing recompose and hooks is a bit of an anti pattern. I wanted to try hooks,
  but then realised I also wanted to build this in an afternoon so it would be easier with the tools I know. Hence - recompose joined the party.

## TODO (for fun/if very bored):

- Chunk the word list so it isn't sent down the pipe
- Make a 'common' word list mode/default
- Media query/something responsive/reactive for mobile.
- Back end for scores + Login with oAuth (FB, google)
