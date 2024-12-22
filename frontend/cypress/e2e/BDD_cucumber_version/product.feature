Feature: Product Component

  This feature ensures users can select a color and see the updated price and color name.

  Scenario: Update price and color name when a color is selected
    Given The product page is loaded
    When The user clicks on the 'Emerald' color button
    Then The price should update to $1200
    And The color name should update to 'Emerald'
