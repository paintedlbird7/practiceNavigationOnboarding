const tacoTruckData = require('../app/(tabs)/data').default;

describe('Taco Truck Data', () => {
  it('should have the correct number of taco trucks', () => {
    expect(tacoTruckData.length).toBe(50); // Replace 50 with the actual number of taco trucks
  });

  it('should have all required fields for each taco truck', () => {
    tacoTruckData.forEach(truck => {
      expect(truck).toHaveProperty('facility_id');
      expect(truck).toHaveProperty('FACILITY_NAME');
      expect(truck).toHaveProperty('PROGRAM_DESCRIPTION');
      expect(truck).toHaveProperty('ZIP');
      expect(truck).toHaveProperty('image');
      expect(truck).toHaveProperty('latitude');
      expect(truck).toHaveProperty('longitude');
    });
  });

  it('should have valid latitude and longitude values', () => {
    tacoTruckData.forEach(truck => {
      expect(truck.latitude).toBeGreaterThanOrEqual(-90);
      expect(truck.latitude).toBeLessThanOrEqual(90);
      expect(truck.longitude).toBeGreaterThanOrEqual(-180);
      expect(truck.longitude).toBeLessThanOrEqual(180);
    });
  });
});