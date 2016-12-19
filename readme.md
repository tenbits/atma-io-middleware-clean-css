[CleanCSS](https://github.com/jakubpawlowicz/clean-css) (Atma Plugin)
-----


The Plugin extends:
- [`atma-io`](https://github.com/atmajs/atma-io) with a custom middleware to write minified JavaScript to files
- [`Atma Toolkit`](https://github.com/atmajs/Atma.Toolkit) with a `atma-io-middleware-clean-css` action


##### How to use

###### Embed into the Project

+ `atma plugin install atma-io-middleware-clean-css`

	This adds `atma-loader-babel` npm dependency and the `package.json` would look like:
    ```json
        {
            "devDependencies": {
                "atma-io-middleware-clean-css"
            },
            "atma": {
                "plugins": [
                    "atma-io-middleware-clean-css"
                ],
                "settings": {
					"atma-io-middleware-clean-css": {
						"minify" : true,
						"clean-css": {} //clean css options
					}
                }
            }
        }
    ```
+ Extend your `build.js` file
    
    ```javascript
    module.exports = {
        // other actions
        'compress': {
            action: 'atma-io-middleware-clean-css',
            files: [ 'source/lib.js' ],
            output: 'release/',

            // optionaly, define constants for the CleanCSS compressor
            'clean-css': {
                
            }
        }
    }
    ```

+ Run

    ```bash
    $ atma compress
    ```

----
The MIT License