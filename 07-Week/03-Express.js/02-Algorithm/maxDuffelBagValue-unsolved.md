# Wednesday Algorithm - maxDuffelBagValue

### Question

###### maxDuffelBagValue: You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
###### While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type. Each type of cake has a weight and a value, stored in an object with two properties:
###### weight: the weight of the cake in kilograms
###### value: the monetary value of the cake in British pounds
###### You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

###### Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

### Setup
```JavaScript
var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var weightCapacity = 20;

maxDuffelBagValue(cakeTypes, weightCapacity);
```
