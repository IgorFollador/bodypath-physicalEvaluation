
//source of calculations https://blog.dietbox.me/voce-sabe-como-calcular-massa-muscular-dos-pacientes/
class BodyData {

    static calculateBodyDensity(data) {
        let sumFolds = data.subscapularis + data.triceps + data.breastplate + data.middle_axillary + data.supra_iliac + data.abdominal + data.mid_femoral;

        let bodyDensity = 1.112 - 0.00043499 * sumFolds + 0.00000055 * sumFolds * 2 - 0.00028826 * data.age;

        return bodyDensity; // g/cm3
    }

    static async calculateFatPercentage(data) {
        const bd = await this.calculateBodyDensity(data);
        
        let fatPercentage = ((4.95 / bd) - 4.50) * 100;

        return fatPercentage; // %
    }

    static async calculateBodyFat(data) {
        const fatPercentage = await this.calculateFatPercentage(data);
        
        let bodyFat = (fatPercentage / 100) * data.weight;

        return bodyFat; // ~kg
    }

    static async calculateBodyMass(data) {
        const bf = await this.calculateBodyFat(data);
        
        let bodyMass = data.weight - bf;

        return bodyMass; // ~kg
    }

    static calculateBasalMetabolicRate(data) {
        //Revised Harris-Benedict Equation (kcal)
        if(data.sex == 'M') { //calc for men
            return ((13.397 * data.weight) + (4.799 * data.height) - (5.677 * data.age) + 88.362);
        } else { //calc for women
            return ((9.247 * data.weight) + (3.098 * data.height) - (4.330 * data.age) + 447.593);
        }
    }
}

module.exports = BodyData;