
//source of calculations https://blog.dietbox.me/voce-sabe-como-calcular-massa-muscular-dos-pacientes/
class BodyData {

    static calculateBodyDensity(data) {
        let sumFolds = data.subscapularis + data.triceps + data.breastplate + data.middle_axillary + data.supra_iliac + data.abdominal + data.mid_femoral;

        return (1.112 - 0.00043499 * sumFolds + 0.00000055 * sumFolds * 2 - 0.00028826 * data.age).toFixed(4);
        console.log(bodyDensity);
        return bodyDensity.toFixed(1); // g/cm3
    }

    static async calculateFatPercentage(data) {
        const bd = await this.calculateBodyDensity(data);
        
        return (((4.95 / bd) - 4.50) * 100).toFixed(4);
        console.log(fatPercentage);
        return fatPercentage.toFixed(1); // %
    }

    static async calculateBodyFat(data) {
        const fatPercentage = await this.calculateFatPercentage(data);
        
        return ((fatPercentage / 100) * data.weight).toFixed(4);
        console.log(bodyFat);
        return bodyFat.toFixed(1); // ~kg
    }

    static async calculateBodyMass(data) {
        const bf = await this.calculateBodyFat(data);
        
        return (data.weight - bf).toFixed(4);
        console.log(bodyMass);

        return bodyMass.toFixed(1); // ~kg
    }

    static calculateBasalMetabolicRate(data) {
        //Revised Harris-Benedict Equation (kcal)
        if(data.sex == 'M') { //calc for men
            return ((13.397 * data.weight) + (4.799 * data.height) - (5.677 * data.age) + 88.362).toFixed(0);
        } else { //calc for women
            return ((9.247 * data.weight) + (3.098 * data.height) - (4.330 * data.age) + 447.593).toFixed(0);
        }
    }
}

module.exports = BodyData;