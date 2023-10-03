import { useState } from 'react';
import { AutoComplete, Form, DatePicker } from 'antd';
import * as S from './form.styled';
import { PrimaryButton } from '../primary-button';
import { debounce } from "debounce";
// import CryptoChart from '../chart/chart';
import moment from 'moment';
import axios from 'axios';

const { RangePicker } = DatePicker;


const CryptoForm = () => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<{ name: string; id: string }[]>([]);

  const handleSearch = async (value: string) => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets');
      const cryptoList = response.data.data;
      const suggestions = cryptoList.filter((crypto: any) => crypto.name.toLowerCase().includes(value.toLowerCase()));
      setOptions(suggestions);
      // console.log(suggestions);
    } catch (error) {
      console.error('Error fetching cryptocurrency suggestions', error);
    }
  };

  const debouncedHandleSearch = debounce(handleSearch, 500);

  const handleSubmit = async () => {
    try {
      const selectedCryptoName = form.getFieldValue('crypto');
      const selectedCrypto = options.find((crypto) => crypto.name === selectedCryptoName);
      const id = selectedCrypto?.id;
      // console.log('Selected Crypto ID:', id);

      const selectedDateRange = form.getFieldValue('interval');

      const [startDate, endDate] = selectedDateRange;

      const startUnixTimestamp = startDate.valueOf();
      const endUnixTimestamp = endDate.valueOf();

      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=h1`, {
        params: {
          start: startUnixTimestamp,
          end: endUnixTimestamp,
        },
      });

      const historicalData = response;

      console.log('Historical data:', historicalData);

    } catch (error) {
      console.error('Error fetching cryptocurrency data', error);
    }
  };

  return (
    <S.FormWrapper>
      <S.StyledForm
        onFinish={handleSubmit}
        form={form}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Cryptocurrency"
          name="crypto"
          rules={[
            {
              required: true,
              message: 'Please select cryptocurrency',
              validateTrigger: 'onSubmit',
            }
          ]}
          trigger="onSelect"
          valuePropName=""
        >
          <AutoComplete
            maxLength={30}
            placeholder="e.g. Bitcoin"
            notFoundContent="No cryptocurrency"
            options={options.map((crypto: any) => ({
              value: crypto.name,
              label: crypto.name,
              key: crypto.id
            }))}
            onSearch={debouncedHandleSearch}
          />
        </Form.Item>
        <Form.Item
          label="Date range"
          name="interval"
          rules={[
            {
              required: true,
              message: 'Please choose date range',
            }
          ]}
        >
          <RangePicker
            disabledDate={(current) => {
              return current && current > moment().endOf('day');
            }}
          />
        </Form.Item>
        <PrimaryButton
          htmlType="submit"
          // loading={loading}
          onClick={form.submit}
        >
          Search
        </PrimaryButton>
      </S.StyledForm>
      {/* {isClicked && <CryptoChart cryptoData={cryptoData} timestamps={stringTimestamps} />} */}
    </S.FormWrapper>
  )
}

export default CryptoForm