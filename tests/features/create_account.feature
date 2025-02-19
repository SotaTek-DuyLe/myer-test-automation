Feature: Myer Create Account
    Create account feature

  Scenario Outline: Verify that user is able to log in and update account information
    Given I log in with given account
    When I go to 'Account Settings'
    Then I should see Account settings page
    When I change Password to '<password>'
    And I change Last Name to '<lastName>'
    And I change Mobile Number to '<mobileNumber>'
    And I click 'Update'
    Then I should see 'Last Name' as '<lastName>'
    And I should see 'Mobile Number' as '<mobileNumber>'
    When I log out
    And I log in with given account
    When I go to 'Account Settings'
    Then I should see Account settings page
    And I should see 'Last Name' as '<lastName>'
    And I should see 'Mobile Number' as '<mobileNumber>'

    Examples:
      | password | lastName | mobileNumber |
      | random   | random   | random       |
