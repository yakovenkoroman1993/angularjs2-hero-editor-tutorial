/**
 * Created by Roman on 26.07.2016.
 */
export class Config {
    public static path = {

        root: 'angularjs2',

        get templates() {
            return this.root + '/templates'
        },

        get styles() {
            return this.root + '/styles'
        }
    };
}