import pytest
from calculator import Calculator

class TestCalculator:
    def test_should_return_sum_when_two_numbers_given(self):
        calc = Calculator()
        result = calc.add(5, 3)
        assert result == 8

    def test_should_raise_error_when_divided_by_zero(self):
        calc = Calculator()
        with pytest.raises(ZeroDivisionError):
            calc.divide(10, 0)