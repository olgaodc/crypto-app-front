import { useState } from 'react';
import { AutoComplete, Form, Select } from 'antd';
import * as S from './form.styled';
import { PrimaryButton } from '../primary-button';
import { debounce } from "debounce";
import CryptoChart from '../chart/chart';
import axios from 'axios';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

// const { RangePicker } = DatePicker;

const intervalOptions = [
  { label: '1 day', value: 'm1' },
  { label: '3 days', value: 'm5' },
  { label: '1 week', value: 'm15' },
  { label: '1 month', value: 'h1' },
  { label: '6 months', value: 'h6' },
  { label: '1 year', value: 'h12' },
  { label: '5 years', value: 'd1' },
];

const CryptoForm = () => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState<{ name: string; id: string }[]>([]);
  const [selectedCryptoPrice, setSelectedCryptoPrice] = useState<number[]>([]);
  const [selectedCryptoTime, setSelectedCryptoTime] = useState<string[]>([]);
  const [isClicked, setClicked] = useState(false);

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

      // const selectedDateRange = form.getFieldValue('interval');
      const selectedIntervalOption = form.getFieldValue('interval');
      const selectedInterval = intervalOptions.find(option => option.label === selectedIntervalOption)?.value;
      // console.log(selectedIntervalOption);
      let startDate;

      if (selectedIntervalOption === '1 day') {
        startDate = dayjs().subtract(1, 'day');
      } else if (selectedIntervalOption === '3 days') {
        startDate = dayjs().subtract(3, 'days');
      } else if (selectedIntervalOption === '1 week') {
        startDate = dayjs().subtract(1, 'week');
      } else if (selectedIntervalOption === '1 month') {
        startDate = dayjs().subtract(1, 'month');
      } else if (selectedIntervalOption === '6 months') {
        startDate = dayjs().subtract(6, 'months');
      } else if (selectedIntervalOption === '1 year') {
        startDate = dayjs().subtract(1, 'year');
      } else if (selectedIntervalOption === '5 years') {
        startDate = dayjs().subtract(5, 'years');
      } 

      // const [startDate, endDate] = selectedDateRange;

      // const startUnixTimestamp = startDate.valueOf();
      // const endUnixTimestamp = endDate.valueOf();
      const startUnixTimestamp = dayjs(startDate).valueOf();
      const endUnixTimestamp = dayjs().valueOf();
      // console.log(startUnixTimestamp);
      // console.log(endUnixTimestamp);
      

      const response = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=${selectedInterval}`, {
        params: {
          start: startUnixTimestamp,
          end: endUnixTimestamp,
        },
      });

      const selectedCryptoData = response.data.data;

      const cryptoPrices = selectedCryptoData.map((item: any) => item.priceUsd);
      const CryptoTimestamps = selectedCryptoData.map((item: any) => {
        const timestamp = item.time;
        const formattedDate = dayjs.unix(timestamp / 1000).format('YYYY-MM-DD HH:mm');
        return formattedDate;
      });

      setSelectedCryptoPrice(cryptoPrices);
      // console.log(selectedCryptoPrice);
      setSelectedCryptoTime(CryptoTimestamps);
      // console.log("times: ", CryptoTimestamps);

      // console.log('Selected Crypto Data:', selectedCryptoData);

    } catch (error) {
      console.error('Error fetching cryptocurrency data', error);
    }
  };

  return (
    <>
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
          {/* <Form.Item
          label="Date range"
          name="interval"
          rules={[
            {
              required: true,
              message: 'Please choose date range',
            }
          ]}
        >
          <RangePicker showTime
            disabledDate={(current) => {
              return current && current > moment().endOf('day');
            }}
          />
        </Form.Item> */}
          <Form.Item
            label="Time interval"
            name="interval"
            rules={[
              {
                required: true,
                message: 'Please choose an interval',
              },
            ]}
          >
            <Select 
            // placeholder="kkk"
            >
              {intervalOptions.map((option) => (
                <Select.Option key={uuidv4()} value={option.label} >
                  {option.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <PrimaryButton
            htmlType="submit"
            // loading={loading}
            onClick={() => { form.submit(); setClicked(true) }}
          >
            Search
          </PrimaryButton>
        </S.StyledForm>
      </S.FormWrapper>
      {isClicked && <CryptoChart cryptoPrice={selectedCryptoPrice} time={selectedCryptoTime} />}
    </>
  )
}

export default CryptoForm