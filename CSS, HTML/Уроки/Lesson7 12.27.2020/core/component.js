class Component {

    constructor(data) {
        this._data = data 
    }

    render() {
        return this._fillDataToTemplate()
    }

    _fillDataToTemplate() {
        var template = this.template()

        for (const [key, value] of Object.entries(this.data())) {
            template = template.replaceAll(`{${key}}`, value)
        }

        return template
    }

    template() {
        return ""
    }

    data() {
        return this._data        
    }
}