var FactorialDynamicValue = function() {

    // Input "number"
    this.number = 5;

    // Evaluate function: takes no params, should return the computer value
    this.evaluate = function() {
        var f = function(x) {
            if (x == 0) {
                return 1;
            }
            else {
                return x * f(x - 1);
            }
        }

        return f(this.number);
    }

    // Title function: takes no params, should return the string to display as
    // the Dynamic Value title
    this.title = function() {
        return "Factorial"
    }

    // Text function: takes no params, should return the string to display as
    // the Dynamic Value text
    this.text = function() {
        return "" + this.number + "!"
    }
}

// Extension Identifier (as a reverse domain name)
FactorialDynamicValue.identifier = "com.luckymarmot.PawExtensions.FactorialDynamicValue";

// Extension Name
FactorialDynamicValue.title = "Factorial Dynamic Value";

// Dynamic Value Inputs
FactorialDynamicValue.inputs = [
    DynamicValueInput("number", "Input Number", "String"),
]

// Register this new Extension
registerDynamicValueClass(FactorialDynamicValue);
