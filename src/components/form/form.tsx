import React, { useState } from 'react';
import { AutoComplete, Form, Select } from 'antd';
import * as S from './form.styled';
import { Container } from '../container';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryButton } from '../primary-button';
import { debounce } from "debounce";
import ccxt from 'ccxt';

const intervalOptions: { [key: string]: string } = {
  day1: '1 day',
  day3: '3 days',
  day5: '5 days',
  week1: '1 week',
  month1: '1 month',
};


const CryptoForm = () => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<string[]>([]);
  const ccxtExchange = new ccxt.binance();

  const handleSearch = async (value: string) => {
    try {
      // Use cctx library to fetch cryptocurrency suggestions
      const markets = await ccxtExchange.loadMarkets();
      const symbols = Object.keys(markets);
      const suggestions = symbols.filter((symbol) =>
        symbol.toLowerCase().includes(value.toLowerCase())
      );

      setOptions(suggestions);
    } catch (error) {
      console.error('Error fetching cryptocurrency suggestions', error);
    }
  };

  // Debounce the handleSearch function
  const debouncedHandleSearch = debounce(handleSearch, 800);

  const handleSubmit = (values: any) => {
    // Handle form submission here
    console.log('Form values:', values);
  };

  // const handleSubmit = async (
  //     createActivityForm: Backend.CreateActivitiesForm,
  //   ) => {
  //     const payload: Backend.CreateActivitiesForm = {
  //       category: createActivityForm.category,
  //       title: createActivityForm.title,
  //       eventDate: createActivityForm.eventDate,
  //       text: createActivityForm.text,
  //       url: createActivityForm.url,
  //       address: createActivityForm.address,
  //     };

  //     await addActivity(payload, newsletter.id);
  //     navigate(NavigationService.ACTIVITIES_PATH);
  //   };

  //   const handleSearch = async (value: string) => {
  //       const suggestions = await getAddressSuggestions(value);

  //       setOptions(suggestions);
  //   };

  return (
    <S.FormWrapper>
      <S.StyledForm
        onFinish={handleSubmit}
        form={form}
        autoComplete="off"
        layout="vertical"
        // initialValues={FORM_INITIAL_VALUES}
      >
        <Form.Item
          label="Cryptocurrency"
          name="crypto"
          rules={[
            {
              required: true,
              message: 'Please select cryptocurrency',
              validateTrigger: 'onSubmit',
            },
          ]}
          trigger="onSelect"
          valuePropName=""
        >
          <AutoComplete
            placeholder="e.g. BTC/USDT"
            notFoundContent="No cryptocurrency"
            options={options.map((option) => ({
              value: option,
              label: option,
              key: uuidv4(),
            }))}
            onSearch={debouncedHandleSearch}
          />
        </Form.Item>
        <Form.Item
          label="Time interval"
          name="interval"
          rules={[
            {
              required: true,
              message: 'Please fill this field',
            },
          ]}
        >
          <Select>
            {Object.keys(intervalOptions).map((key) => (
              <Select.Option key={key} value={key}>
                {intervalOptions[key]}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <PrimaryButton
          // type="primary"
          // htmlType="submit"
          // loading={loading}
          onClick={form.submit}
        >
          Search
        </PrimaryButton>
      </S.StyledForm>
    </S.FormWrapper>
  )
}

export default CryptoForm