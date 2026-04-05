import { Alert, Paper } from '@mantine/core';
import { IconAlertCircleFilled } from '@tabler/icons-react';
import { getUnfilledCharacteristics } from '../../utils';
import type { RevisionType } from '../../types';
import { categoryTranslations } from '../../../../constants';

export const NeedsRevision = ({ category, params, hasDescription }: RevisionType) => (
  <Paper shadow="lg" radius="md" mb={16}>
    <Alert
      variant="light"
      color="orange"
      title="Требуются доработки"
      icon={<IconAlertCircleFilled size={18} color="orange" />}
      c="black"
    >
      У объявления не заполнены поля:
      <ul style={{ marginTop: 4, paddingLeft: 20, marginBlockEnd: 0 }}>
        {!hasDescription && <li>Описание</li>}
        {getUnfilledCharacteristics({
          category: category,
          params: params,
        }).map((charKey) => (
          <li key={charKey}>{categoryTranslations[category][charKey].label}</li>
        ))}
      </ul>
    </Alert>
  </Paper>
);
