export class Valdatior {
    errors = {}

    formValdaite (form, validation) {
        for (let field in validation) {
            const rules = validation[field].split('|')            
            this.checkRules(rules, form, field)
        }
        return this.errors
    }

    inputValdaite (validation, form, field) {
        const rules = validation[field].split('|')
        this.checkRules(rules, form, field)
        return this.errors
    }

    checkRules (rules, form, field) {        
        rules.forEach((rule) => {
            if(rule === 'required')  return this.required(form, field)
            if(rule.includes('min')) return this.min(form, field, rule)
            if(rule.includes('in')) return this.in (form, field, rule)
            if(rule.includes('max')) return this.max(form, field, rule)
            if(rule === 'email') return this.email (form, field)
            if(rule.includes('match:')) return this.match (form, field, rule)
            if(rule === 'password') return this.password (form, field)
            if(rule === 'number') return this.number (form, field)
            if(rule.includes('date')) return this.date (form, field)
        })
    }

    email (form, field) {
        const emailregex = /^([A-Za-z\d-_.%+]+)@([A-Za-z\d.-]+)\.([A-Za-z]{1,})(\.[A-Za-z]{1,})?$/
        const message = 'not a vaild email'
        if(!emailregex.test(form[field])) this.addError (field, message)
        else this.removeError (field, message)
    }

    match (form, field, rule) {
        const matchTo = rule.replace('match:', '')
        const message = `${field} and ${matchTo} dosn't match`
        if(form[field] != form[matchTo]) this.addError (field, message)
        else if(form[field] == form[matchTo])this.removeError (field, message)
    }

    max (form, field, rule) {
        const maxRegex = /\d+/
        const max = maxRegex.exec(rule)[0]
        const message = `${field} max characters is ${max} chars`
        if(form[field]?.length > max) this.addError (field, message)
        if(form[field]?.length <= max) this.removeError (field, message)
    }

    min (form, field, rule) {
        const minregex = /\d+/
        const min = minregex.exec(rule)[0]
        const message = `${field} must be ${min} chars at least`
        if(form[field]?.length < min) this.addError (field, message)
        if(form[field]?.length >= min) this.removeError (field, message)
    }

    in (form, field, rule) {
        const options = rule.replace('in:', '')
        const message = `${field} must be one of options ${options}`        
        if(options.includes(form[field])) this.removeError (field, message) 
        else this.addError (field, message)
    }

    date (form, field, rule) {
        const date = new Date(form[field])
        const message = `${field} is not a valid Date`
        if(isNaN(date)) this.addError (field, message)
        else this.addError (field, message)
    }

    number (form, field) {
        const value = form[field]                
        const num = Number(value.trim())
        const message = `${field} is not a number`
        if(value === '' && isNaN(num))  this.addError (field, message)
        else this.removeError (field, message)
    }

    password (form, field) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\d)(?=.*[^\w\s])\S{8,64}$/
        const message = 'Not A Valid Password'
        if(!passwordRegex.test(form[field])) this.addError(field, message)
        else this.removeError(field, message)
    }

    required (form, field) {
        const message = `${field} is required`
        if(form[field] === '') this.addError (field, message)
        else this.removeError (field, message)
    }

    addError (field, message) {
        if(this.errors[field] && !this.errors[field].includes(message))
            this.errors[field] = [...this.errors[field],message]
        else this.errors = {...this.errors, [field]:[message]}        
    }

    removeError (field, message) { 
        if(!this.errors[field]) return
        const filteredErrors  = this.errors[field].filter((msg) => message != msg )        
        this.errors = {...this.errors, [field]:[...filteredErrors]}
        if(!this.errors[field].length) delete this.errors[field]
    }
    
}

export const formValdaitor = new Valdatior