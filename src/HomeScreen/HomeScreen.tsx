import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

import {RouteProp} from '@react-navigation/native';
import axios from 'axios';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import ChoiceBox from '../Common/Components/ChoiceBox';
import HeaderComponent from '../Common/Components/HeaderComponent';
import PlayList from '../Common/Components/PlayList';
import QuestionBox from '../Common/Components/QuestionBox';
import QuestionDetails from '../Common/Components/QuestionDetails';
import RightBar from '../Common/Components/RightBar';
import {
  getHeight,
  getWidth,
  heightPercentage,
} from '../Common/Helpers/Responsive';
import {RootStackParamList} from '../Common/Helpers/RootStackParamList';
import {QuestionType} from '../Common/Helpers/types';

type Props = {
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const HomeScreen = ({route, navigation}: Props) => {
  const [question, setquestion] = useState<QuestionType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(600);
  const [selectedId, setSelectedId] = useState<'A' | 'B' | 'C'>();
  const [correctAnswer, setCorrectAnswer] = useState<'A' | 'B' | 'C'>();
  const [selectionMade, setSelectionMade] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (!selectionMade) {
        setTimer(lastTimerCount => {
          lastTimerCount <= 1 && clearInterval(interval);
          return lastTimerCount - 1;
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selectionMade]);

  const url = 'https://cross-platform.rp.devfactory.com/for_you';
  const answerURL = 'https://cross-platform.rp.devfactory.com/reveal?id=';

  const FetchQuestion = async () => {
    axios
      .get(url)
      .then((res: any) => {
        setquestion(res?.data);
        setTimeout(() => {
          setLoading(false);
          setSelectionMade(false);
        }, 1000);
      })
      .catch((err: any) => {
        console.log('Could not retrieve messages', err);
      });
  };
  const resetQuestion = () => {
    setSelectionMade(true);
    setLoading(true);
    setCorrectAnswer(undefined);
    setSelectedId(undefined);
    setTimer(600);
    FetchQuestion();
  };
  const CheckAnswer = async (id: number, answerID: 'A' | 'B' | 'C') => {
    axios
      .get(answerURL + id)
      .then(
        (res: {
          data: {
            correct_options: {answer: string; id: 'A' | 'B' | 'C'}[];
            id: 7627;
          };
        }) => {
          setCorrectAnswer(res.data.correct_options[0].id);

          setTimeout(() => {
            setLoading(false);
          }, 1000);
        },
      )
      .catch((err: any) => {
        console.log('Could not retrieve messages', err);
      });
  };

  useEffect(() => {
    setLoading(true);
    setTimer(600);
    FetchQuestion();
  }, []);
  console.log(correctAnswer, 'CORRECT ANSWER');
  const chooseOption = (id: 'A' | 'B' | 'C') => {
    setSelectedId(id);
    if (question) {
      setSelectionMade(true);
      CheckAnswer(question.id, id);
    }
  };

  console.log(question);
  return (
    <ImageBackground
      source={{
        uri: 'https://cross-platform-rwa.rp.devfactory.com/images/6194%20-%20black%20people%20after%20slavery.png',
      }}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'white'}
        />
      ) : (
        question && (
          <>
            <HeaderComponent time={timer} />
            <View style={styles.mainContainer}>
              <QuestionBox question={question.question} />
              <View style={styles.bottomContainer}>
                <View style={styles.leftContainer}>
                  {question.options.map((item, index) => {
                    return (
                      <ChoiceBox
                        key={index.toString() + 'Choice'}
                        onPress={() => chooseOption(item.id)}
                        choice={item.answer}
                        correctAnswer={
                          correctAnswer && correctAnswer === item.id
                        }
                        wrongAnswer={correctAnswer && correctAnswer !== item.id}
                        disabled={selectionMade}
                        selected={selectedId === item.id}
                      />
                    );
                  })}

                  <QuestionDetails
                    title={question.user.name}
                    text={question.description}
                  />
                </View>
                <View style={styles.rightContainer}>
                  <RightBar />
                </View>
              </View>
            </View>
            <PlayList
              text={question.playlist}
              onPress={() => resetQuestion()}
            />
          </>
        )
      )}
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: getHeight(40),
    paddingLeft: getHeight(16),
    paddingRight: getHeight(8),
    flex: 1,
  },
  mainContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  activityIndicator: {marginTop: heightPercentage(40)},
  leftContainer: {marginRight: getWidth(12), flex: 1, alignSelf: 'flex-end'},
  rightContainer: {
    flexDirection: 'column',
  },
  bottomContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
});
