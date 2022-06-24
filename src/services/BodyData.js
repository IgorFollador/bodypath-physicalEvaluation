
//source of calculations https://blog.dietbox.me/voce-sabe-como-calcular-massa-muscular-dos-pacientes/
class BodyData {

    static calculateBodyDensity(data) { // g/cm3
        let sumFolds = parseFloat(data.subscapularis) + parseFloat(data.triceps) + parseFloat(data.breastplate) + parseFloat(data.middle_axillary) + parseFloat(data.supra_iliac) + parseFloat(data.abdominal) + parseFloat(data.mid_femoral);

        return parseFloat((1.112 - 0.00043499 * parseFloat(sumFolds) + 0.00000055 * sumFolds * 2 - 0.00028826 * parseFloat(data.age)).toFixed(4));
    }

    static async calculateFatPercentage(data) { // %
        const bd = await this.calculateBodyDensity(data);
        
        return parseFloat((((4.95 / bd) - 4.50) * 100).toFixed(4));
    }

    static async calculateBodyFat(data) { // ~kg;
        const fatPercentage = await this.calculateFatPercentage(data);
        
        return parseFloat(((fatPercentage / 100) * parseFloat(data.weight)).toFixed(4)); 
    }

    static async calculateBodyMass(data) { // ~kg;
        const bf = await this.calculateBodyFat(data);
        
        return parseFloat((parseFloat(data.weight) - bf).toFixed(4));
    }

    static calculateBasalMetabolicRate(data) { //Revised Harris-Benedict Equation (kcal)
        
        if(data.sex == 'M') { //calc for men
            return parseFloat(((13.397 * parseFloat(data.weight)) + (4.799 * parseFloat(data.height)) - (5.677 * parseFloat(data.age)) + 88.362).toFixed(0));
        } else { //calc for women
            return parseFloat(((9.247 * parseFloat(data.weight)) + (3.098 * parseFloat(data.height)) - (4.330 * parseFloat(data.age)) + 447.593).toFixed(0));
        }
    }
}

module.exports = BodyData;